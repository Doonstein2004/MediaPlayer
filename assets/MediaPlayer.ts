class MediaPlayer {

    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer () {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    reproducir() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        };
    }

    mute() {
        this.media.muted = true;
    }

    isMute() {
        return this.media.muted;
    }

    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }
    }

    unmute() {
        this.media.muted = false;
    }

    pause() {
        this.media.pause();
    }

    play() {
        this.media.play();
    }

    changeVolume(volumenInput: HTMLInputElement) {
        const volumen: number = parseFloat(volumenInput.value);
        this.media.volume = volumen;
    }
};

export default MediaPlayer;