/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "azure-openai";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const openai = new OpenAIApi(
    new Configuration({
        azure: {
            apiKey: "4cb419328ee94f389cb68e945f95a4ff",
            endpoint: "https://aoai-swn-hackathon-01.openai.azure.com/",
            deploymentName: "gpt-4",
        }
    }),
);


const AZURE_SEARCH_ENDPOINT = "https://az24d1aisswn01.search.windows.net"
const AZURE_SEARCH_API_KEY = "hX5ysIbhnrQiiumPFWlWEEfb1J3pxfrwRHDturmrRWAzSeBJTV7U"
const AZURE_SEARCH_INDEX = "azureblob-index123";



function LoadingIcon() {
    return (
        <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
        </div>
    );
}

const ChatBot = () => {
    const [formData, setFormData] = useState({ prompt: "" });
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState([]);

    const handleChange = (event) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    };

    const addMessageToPayload = (type, message, documents = []) => {
        setPayload(prevPayload => [...prevPayload, { type, line: message, documents }]);
    };

    const searchDocuments = async (query) => {
        const searchUrl = `${AZURE_SEARCH_ENDPOINT}/indexes/${AZURE_SEARCH_INDEX}/docs?api-version=2021-04-30-Preview&search=${query}`;
        const headers = {
            'api-key': AZURE_SEARCH_API_KEY,
            'Content-Type': 'application/json',
        };
    
        try {
            const response = await axios.get(searchUrl, { headers });
            return response.data.value;
        } catch (error) {
            console.error('Error searching documents:', error);
            return [];
        }
    };

    const getResponse = async (event) => {
        event.preventDefault();
        setLoading(true);

        const userMessage = formData.prompt;
        addMessageToPayload('user', userMessage);
        setFormData({ prompt: '' });

        try {
            const documents = await searchDocuments(userMessage);
            const documentContents = documents.map(doc => doc.content).join('\n');
            const documentReferences = documents.map(doc => doc.name).join(', ');

            const response = await openai.createChatCompletion({
                messages: [
                    { role: "system", content: "You are an AI assistant designed to understand documents and the context of the texts within them. Your task is to respond to user queries based on the information contained in the documents. You are not allowed to reveal information about yourself, such as who developed you or what your underlying language model is." },
                    { role: "user", content: userMessage },
                    { role: "system", content: `Relevant documents: \n${documentContents}` }
                ]
            });

            // Log the full response for debugging
            console.log('API response:', response);

            // Check if the response and message content are as expected
            if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
                const botMessage = response.data.choices[0].message.content;
                addMessageToPayload('bot', botMessage, documentReferences);
            } else {
                console.error('Unexpected API response format:', response);
                addMessageToPayload('bot', 'Sorry, there was an error processing your request.');
            }
        } catch (error) {
            console.error('Error getting response from OpenAI:', error);
            addMessageToPayload('bot', 'Sorry, there was an error processing your request.');
        }

        setLoading(false);
    };

    return (
        <div className="main-center-content-m-left center-content search-sticky">
            <div className="question_answer__wrapper__chatbot">
                {payload.map((item, index) => (
                    <div className="single__question__answer" key={index}>
                        <div className="question_user">
                            <div className="left_user_info">
                                <img src={require("../assets/images/avatar/03.png")} alt="avatar" />
                                <div className="question__user">{item.type === 'user' ? item.line : ''}</div>
                            </div>
                        </div>
                        <div className="answer__area">
                            <div className="thumbnail">
                                <img src={require("../assets/images/avatar/04.png")} alt="avatar" />
                            </div>
                            <div className="answer_main__wrapper">
                                <h4 className="common__title">Tech Titans</h4>
                                <div className="disc bot-response">
                                    {item.type === 'bot' ? <ReactMarkdown>{item.line}</ReactMarkdown> : ''}
                                    {item.documents && <p><strong>References:</strong> {item.documents}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && <div className="flex justify-start mb-72 ml-5 mr-20 pb-44"><LoadingIcon className="w-6 pb-8" /></div>}
            </div>
            <form onSubmit={getResponse} className="search-form">
                <input
                    type="text"
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                    placeholder="Message openup..."
                    className="flex-grow w-9/12 text-gray-700 outline-none font-semibold py-2"
                />
                <button type="submit">
                    <i className="fa-regular fa-arrow-up"></i>
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
