// faking some objects so all goes well
if (typeof(OVERRIDE) == "undefined") {
  var navigator = {
    appName: "Netscape"
  };

  var window = {
    atob: function(str) {
      return Buffer.from(str, 'base64').toString('utf-8');
    },
    btoa: function(str) {
      return Buffer.from(str, 'utf8').toString('base64');
    }
  };

  var alert = function(msg) {
    console.log(msg);
  };
} else {
  var navigator = OVERRIDE.navigator;
  var window = OVERRIDE.window;
}


var sha1 = {
  hex: function(){
      throw new Error("Not Implemented");
    }
};

var sha256 = {
  hex: function(i) {return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(i));}
};

