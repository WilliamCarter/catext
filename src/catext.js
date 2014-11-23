define([], function() {

	var Catriona = {};

    Catriona.equality = function(one, two) {

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
	                if (!this.equality(one[key], two[key])) {
	                    return false;
	                }
	            }
	            // one is a subset of two
	            for (var key in one) {
	                if (!this.equality(one[key], two[key])) {
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

    Catriona.contains = function(array, item) {
    	var catriona = this;

        if (typeof item === "function") {
        	var predicate = item;

            for(var i = 0; i < array.length; i++) {
                if (predicate(array[i])) { return true; }
            }
            return false;

        } else {
            return catriona.contains(array, function(other) {
            	return catriona.equality(item, other)
            });
        }
    };

    return Catriona;
	
});
