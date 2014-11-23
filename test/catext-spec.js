define(["catext"], function(CatExt) {

    describe("Object.equality", function() {

        it("should return false for objects of different types", function() {
            expect(CatExt.equality({}, 9)).toBe(false);
        });

        // Functions
        it("should return false for functions, which cannot be compared reliably", function() {
            expect(CatExt.equality(function(){}, function(){})).toBe(false);
        });

        // Numbers
        it("should return false for unequal numbers", function() {
            expect(CatExt.equality(6.4, 7)).toBe(false);
        });

        it("should return true for equal numbers", function() {
            expect(CatExt.equality(6.2, 6.2)).toBe(true);
        });

        // Strings
        it("should return false for unequal string primatives", function() {
            expect(CatExt.equality("600", "607")).toBe(false);
        });

        it("should return true for equal string primatives", function() {
            expect(CatExt.equality("600", "600")).toBe(true);
        });

        // Strings
        it("should return false for unequal boolean primatives", function() {
            expect(CatExt.equality(true, false)).toBe(false);
        });

        it("should return true for equal boolean primatives", function() {
            expect(CatExt.equality(false, false)).toBe(true);
        });

        // undefined/null
        it("should return true for equal undefineds", function() {
            expect(CatExt.equality(undefined, undefined)).toBe(true);
        });

        it("should return true for equal nulls", function() {
            expect(CatExt.equality(undefined, undefined)).toBe(true);
        });

        it("should return false for null compared with undefined", function() {
            expect(CatExt.equality(undefined, null)).toBe(false);
        });

        // Complex objects
        it("should return true for matching, empty objects", function() {
            expect(CatExt.equality({}, {})).toBe(true);
        });

        it("should return true for matching objects", function() {
            expect(CatExt.equality(
            	{ id: 7, name: "CatExt" },
            	{ id: 7, name: "CatExt" }
            )).toBe (true);
        });

        it("should return false for non-matching objects", function() {
            expect(CatExt.equality(
            	{ id: 7, name: "CatExt" },
            	{ id: 7, name: "Katriona" }
            )).toBe (false);
        });

        // Complex, nested objects
        it("should return true for matching, nested objects", function() {
            expect(CatExt.equality(
            	{ id: 7, person: { name: "CatExt", job: "Some sort of debt management thing" } },
                { id: 7, person: { name: "CatExt", job: "Some sort of debt management thing" } }
            )).toBe (true);
        });

        it("should return false for non-matching, nested objects", function() {
            expect(CatExt.equality(
            	{ id: 7, person: { name: "CatExt", job: "Some sort of debt management thing" } },
                { id: 7, person: { name: "CatExt", job: "Some sort of debt manager" } }
            )).toBe (false);
        });

        // Complex object subsets
        it("should return false for the first object being a subset of the second", function() {
            expect(CatExt.equality(
            	{ id: 7 },
                { id: 7, name: "CatExt" }
            )).toBe (false);
        });

        it("should return false for the first object being a superset of the second", function() {
            expect(CatExt.equality(
                { id: 7, name: "CatExt" },
            	{ id: 7 }
            )).toBe (false);
        });
    });

    ddescribe("Array.contains", function() {

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
