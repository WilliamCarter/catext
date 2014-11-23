define(["catext/catext-arrays"], function(CatExt) {

    describe("Array.insertAt", function() {

        var array;

        beforeEach(function(){
            array = [0,1,2,3,4,5];;
        })

        it("should insert an item in the specified index of an array", function() {
            CatExt.insertAt(array, 3, "three");
            expect(array).toEqual([0, 1, 2, "three", 3, 4, 5]);
        });

        it("should return the new array after insert", function() {
            expect(CatExt.insertAt(array, 3, "three")).toEqual([0, 1, 2, "three", 3, 4, 5]);
        });

    });

    describe("Array.contains", function() {

        // Contains item staisfying predicate
        var isEven = function(number) {
            return (number % 2) === 0;
        };

        it("should return true when the array contains an item that matches the specified predicate", function() {
            expect(CatExt.contains([1,13568,5,75], isEven)).toBe(true);
        });

        it("should return false when the array does not contain an item that matches the specified predicate", function() {
            expect(CatExt.contains([1,13567,5,75], isEven)).toBe(false);
        });

        // Contains primative item
        it("should return true when the array contains the specified primitive item", function() {
            expect(CatExt.contains([1,2,3], 3)).toBe(true);
        });

        it("should return false when the array does not contain the specified primitive item", function() {
            expect(CatExt.contains([1,2,3], 8)).toBe(false);
        });

        // Contains complex item (This is really just retesting Equality...)
        it("should return true when the array contains the specified complex item", function() {
            expect(CatExt.contains(
            	[ { id: 7, name: "CatExt" }, { id: 96, name: "CatExt" } ],
            	{ id: 7, name: "CatExt" }
            )).toBe(true);
        });

        it("should return true when the array does not contain the specified complex item", function() {
            expect(CatExt.contains(
            	[ { id: 7, name: "CatExt" }, { id: 96, name: "CatExt" } ],
            	{ id: 9, name: "CatExt" }
            )).toBe(false);
        });

    });

});
