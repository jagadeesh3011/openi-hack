import { React } from "react";

const Voice = () => {
  return (
    <>
        <div class="dash-board-main-wrapper">

<div class="main-center-content-m-left center-content search-sticky">
    <div class="audio-main-generator-start">
        <form action="#">
            <div class="ask-for-audio">
                <textarea placeholder="Here write text" required></textarea>
                <i class="fa-light fa-pen-to-square"></i>
                <div class="button-wrapper-generator">
                    <button class="rts-btn btn-primary">Generate
                        <img src={require("../assets/images/icons/06.svg")} alt="icons"/>
                    </button>
                    <button class="mp3 rts-btn btn-border">
                        MP3
                        <i class="fa-sharp fa-light fa-chevron-down"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>

    <div class="audio-main-wrapper-top-bottom mb--60">
        <div class="audio-main-wrapper">
            <div class="audio-player">
                <div class="timeline">
                    <div class="progress"></div>
                </div>
                <div class="controls">
                    <div class="play-container">
                        <div class="toggle-play play">
                        </div>
                    </div>
                    <div class="time">
                        <div class="current">0:00</div>
                         {/* <div class="divider">/</div> */}
                        <div class="length"></div>
                    </div>
                    <div class="volume-container">
                        <div class="volume-button">
                            <div class="volume icono-volumeMedium"></div>
                        </div>

                        <div class="volume-slider">
                            <div class="volume-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="rts-btn btn-primary mt--30">Downloaded
            <i class="fa-light fa-download"></i>
        </button>
    </div>
    <div class="audio-main-generator-start">
        <form action="#">
            <div class="ask-for-audio">
                <textarea placeholder="Here write text" required></textarea>
                <i class="fa-light fa-pen-to-square"></i>
                <div class="button-wrapper-generator">
                    <button class="rts-btn btn-primary">Generate
                        <img src={require("../assets/images/icons/06.svg")} alt="icons"/>
                    </button>
                    <button class="mp3 rts-btn btn-border">
                        MP3
                        <i class="fa-sharp fa-light fa-chevron-down"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="audio-main-wrapper-top-bottom mb--60">
        <div class="audio-main-wrapper">
            <div class="audio-players">
                <div class="timeline">
                    <div class="progress"></div>
                </div>
                <div class="controls">
                    <div class="play-container">
                        <div class="toggle-play play">
                        </div>
                    </div>
                    <div class="time">
                        <div class="current">0:00</div>
                         {/* <div class="divider">/</div> */}
                        <div class="length"></div>
                    </div>
                    <div class="volume-container">
                        <div class="volume-button">
                            <div class="volume icono-volumeMedium"></div>
                        </div>

                        <div class="volume-slider">
                            <div class="volume-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="rts-btn btn-primary mt--30">Downloaded
            <i class="fa-light fa-download"></i>
        </button>
    </div>
    <div class="audio-main-generator-start">
        <form action="#">
            <div class="ask-for-audio">
                <textarea placeholder="Here write text" required></textarea>
                <i class="fa-light fa-pen-to-square"></i>
                <div class="button-wrapper-generator">
                    <button class="rts-btn btn-primary">Generate
                        <img src={require("../assets/images/icons/06.svg")} alt="icons"/>
                    </button>
                    <button class="mp3 rts-btn btn-border">
                        MP3
                        <i class="fa-sharp fa-light fa-chevron-down"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="audio-main-wrapper-top-bottom mb--120">
        <div class="audio-main-wrapper">
            <div class="audio-playerer">
                <div class="timeline">
                    <div class="progress"></div>
                </div>
                <div class="controls">
                    <div class="play-container">
                        <div class="toggle-play play">
                        </div>
                    </div>
                    <div class="time">
                        <div class="current">0:00</div>
                         {/* <div class="divider">/</div> */}
                        <div class="length"></div>
                    </div>
                    <div class="volume-container">
                        {/* <div class="volume-button"> */}
                            <div class="volume icono-volumeMedium"></div>
                        </div>

                        <div class="volume-slider">
                            <div class="volume-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="rts-btn btn-primary mt--30">Downloaded
            <i class="fa-light fa-download"></i>
        </button>
    </div>
    <form action="#" class="search-form">
                <input type="text" placeholder="Message openup..."/>
                <button><i class="fa-regular fa-arrow-up"></i></button>
            </form>
</div>
    </>
  );
};

export default Voice;
