define([], function() {

    var equality = function(one, two) {

        if (typeof one !== typeof two) {
            return false;
        }

    	switch (typeof one) {
    		case "string":
    		case "number":
    		case "boolean":
    		case "undefined":
    		case "null":
    			return (one === two);

    		case "object":
	            // two is a subset of one
	            for (var key in two) {
	                if (!equality(one[key], two[key])) {
	                    return false;
	                }
	            }
	            // one is a subset of two
	            for (var key in one) {
	                if (!equality(one[key], two[key])) {
	                    return false;
	                }
	            }

	            // All is equal
	            return true;

            default :
                // both two and one are a 'function' or another unknown type that isn't reliably comparable
            	return false
    	}

    };

    var clone = function(object) {
        return JSON.parse(JSON.stringify(object));
    };

    var merge = function(original, updates) {
        // Recursively copy an object's attributes on to another.
        for(var key in updates) {
            if (typeof updates[key] === "object" && !Array.isArray(updates[key])) {
                original[key] =  original[key] || {};
                merge(original[key], updates[key]);
            } else {
                original[key] = updates[key];
            }
        }

    };

    var optionally = function(object, ifTrue, ifFalse) {
        object ? ifTrue(object) : ifFalse && ifFalse();
    }

    return {
        clone: clone,
        equality: equality,
        optionally: optionally
    };
	
});
