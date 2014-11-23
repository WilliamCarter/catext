define(["catext-objects"], function(CObjs) {

    var insertAt = function(array, index, item) {
        array.splice(index, 0, item);
        return array;
    }

    var contains = function(array, item) {
    	var catriona = this;

        if (typeof item === "function") {
        	var predicate = item;

            for(var i = 0; i < array.length; i++) {
                if (predicate(array[i])) { return true; }
            }
            return false;

        } else {
            return contains(array, function(other) {
            	return CObjs.equality(item, other)
            });
        }
    };

    return {
        insertAt: insertAt,
        contains: contains
    };
	
});
