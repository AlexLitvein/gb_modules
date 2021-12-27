class _ScriptLoader {
    #paths = new Set();
    constructor() {
        if (typeof _ScriptLoader.instance === 'object') {
            return _ScriptLoader.instance;
        }
        _ScriptLoader.instance = this;

        return _ScriptLoader.instance;
    }

    #loadScript(path, callback) {
        const sz = this.#paths.size;
        this.#paths.add(path);
        if (sz != this.#paths.size) {
            const script = document.createElement('script');
            script.type = "module";
            // script.type = "text/javascript";
            script.src = path;
            script.onload = callback;
            document.body.appendChild(script);
        }
    }

    load(path, callback) {
        let arr = [];
        if (typeof path === 'string') {
            arr.push(path);
        } else {
            arr = path;
        }

        arr.forEach(el => {
            this.#loadScript(el, callback);
        });
    }

    
}

const ScriptLoader = new _ScriptLoader();
export { ScriptLoader };