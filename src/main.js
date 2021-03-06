
function Controller() {

    // Chrome pattern matching is too basic
    // so do more fine grain matching here
    var currentUrl = window.location.href;
    if (currentUrl !== undefined) {
        if (/\/\d+\.html$/.test(currentUrl)) {
            // single post
            this.content_script = new HousingPost();
        } else {
            // not a single post so hopefully a list of posts
            this.content_script = new HousingIndex();
        }
    }
    return this;
}

new Controller();

