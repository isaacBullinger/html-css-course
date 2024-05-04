let videosHTML = '';

videos.forEach((video) => {
    videosHTML += `
        <div class="video-preview">
            <div class="thumbnail-row">
                <a href="${video.videoLink}" target="_blank">
                    <img class="thumbnail" src="${video.thumbnail}">
                </a>
                <div class="video-time">${video.time}</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-picture">
                    <div class="profile-picture-container">
                        <a href="${video.channelLink}" target="_blank">
                            <img class="profile-picture" src="${video.channelThumbnail}">
                        </a>
                        <div class="channel-tooltip">
                            <img class="channel-picture-tooltip" src="${video.channelThumbnail}" alt="">
                            <div class="channel-tooltip-text">
                                <div class="channel-name">
                                    ${video.author}
                                </div>
                                <div class="subscribers">
                                    ${video.subscribers}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="video-info">
                    <p class="video-title">
                        <a class="video-link" href="${video.videoLink}" target="_blank">
                            ${video.title}
                        </a>
                    </p>

                    <p class="video-author">
                        ${video.author}
                    </p>

                    <p class="video-stats">
                        ${video.views} &#183; ${video.release}
                    </p>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-video-grid')
    .innerHTML = videosHTML;