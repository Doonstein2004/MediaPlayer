function MediaPlayer (config) {
    this.media = config.el
};

MediaPlayer.prototype.reproducir = function () {
    if (this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()
    }
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.play = function () {
    this.media.play();
};

export default MediaPlayer;