
function Jiogames() {

//var currentTime = new Date();
        // If its not called as a constructor,
        if(this instanceof arguments.callee == false){
                /*
                        This is used by android to get topScore on exit
                */
                if(!window.topScore){
                        console.log("Jiogames: on exit no score to post");
                        window.DroidHandler.postScore(0);
                }else{
                        //@param window.topScore, Integer
                        window.DroidHandler.postScore(window.topScore);
                }
                return;
        }

        console.log("Jiogames: Initialized SDK!");

        var self = this;
        this.cacheAdRequested = false;
        /*
                @param score, integer
        */
        this.postScore = function(score){
                console.log("Jiogames: postScore() ",score);
                if(!score){
                        console.log("Jiogames: postScore() no value ",score);
                }
                // window.topScore is integer
                console.log("PostScoore:",score);
                window.DroidHandler.postScore(score);
        }
        /*
                @param adKeyId, String
                @param source, String
        */
        this.cacheAd = function(adKeyId, source){
            if(!adKeyId || !source){
                    adKeyId? null: (console.log("Jiogames: cacheAd() no adKeyId to cacheAd ",adKeyId));
                    source? null : (console.log("Jiogames: cacheAd() no source to cacheAd ",source));
                    return;
            }
            self.cacheAdRequested = true;
            window.DroidHandler.cacheAd(adKeyId, source);
            console.log ("CurrentTime cacheAd: Interstitial "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
        }
        /*
                @param adKeyId, String
                @param source, String
        */
    this.showAd = function(adKeyId, source){
        if(!adKeyId || !source){
                adKeyId? null: (console.log("Jiogames: showAd() no adKeyId to showAd ",adKeyId));
                source? null : (console.log("Jiogames: showAd() no source to showAd ",source));
                return;
        }
        window.DroidHandler.showAd(adKeyId, source);
        console.log ("CurrentTime showAd: Interstitial "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }

    this.cacheAdRewarded = function (adKeyId, source) {
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: cacheAdRewarded() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: cacheAdRewarded() no source to cacheAd ", source));
            return;
        }
        self.cacheAdRequested = true;
        window.DroidHandler.cacheAdRewarded(adKeyId, source);
        console.log ("CurrentTime cacheAdRewarded: Rewarded Video "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }

    this.cacheAdInstream = function (adKeyId, source) {
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: cacheAdInstream() no adKeyId to cacheAd ", adKeyId));
            source ? null : (console.log("Jiogames: cacheAdInstream() no source to cacheAd ", source));
            return;
        }
        self.cacheAdRequested = true;
        window.DroidHandler.cacheAdInstream(adKeyId, source);
        console.log ("CurrentTime cacheAdInstream: InStream Video "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }


    this.showAdRewarded = function (adKeyId, source) {
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: showAdRewarded() no adKeyId to showAd ", adKeyId));
            source ? null : (console.log("Jiogames: showAdRewarded() no source to showAd ", source));
            return;
        }
        window.DroidHandler.showAdRewarded(adKeyId, source);
        console.log ("CurrentTime showAdRewarded: Rewarded Video "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }


    this.showAdInstream = function (adKeyId, source) {
        if (!adKeyId || !source) {
            adKeyId ? null : (console.log("Jiogames: showAdInstream() no adKeyId to showAd ", adKeyId));
            source ? null : (console.log("Jiogames: showAdInstream() no source to showAd ", source));
            return;
        }
        window.DroidHandler.showAdInstream(adKeyId, source);
        console.log ("CurrentTime showAdInstream: InStream Video "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }

    this.setInStreamControl = function (adKeyId, visible) {
        console.log("Jiogames: setInStreamControl() for adSpotKey: "+adKeyId+" visible "+visible);

        if (!adKeyId || !visible) {
            adKeyId ? null : (console.log("Jiogames: setInStreamControl() no adKeyId ", adKeyId));
            visible ? null : (console.log("Jiogames: setInStreamControl() no visible ", visible));
            return;
        }
        window.DroidHandler.setInStreamControl(adKeyId, visible);
        console.log ("CurrentTime setInStreamControl: adKeyId "+adKeyId+": "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds());
    }
}
