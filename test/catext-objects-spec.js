define(["catext-objects"], function(CatExt) {

    var catriona = {
        name: "Catriona",
        age: 25,
        isLovely: function() {
            return true;
        },
        job: {
            employed: true,
            getSatisfaction: function() {
                return 0;
            }
        }
    };

    describe("clone", function() {

        it("should clone objects without attached functions", function() {
            var catrionaClone = CatExt.clone(catriona);
            expect(catrionaClone).toEqual({
                name: "Catriona",
                age: 25,
                job: {
                    employed: true
                }
            })
        });
    });

    // describe("merge", function() {
    //     it("should merge one object's attributes on to another", function() {
    //         var catrionaWithClients = CatExt.merge(catriona, {
    //             job: {
    //                 clients: ["David"],
    //                 getSalary: function() {
    //                     return "2p";
    //                 }
    //             }
    //         });
    //         expect(catrionaWithClients).toEqual({
    //             name: "Catriona",
    //             age: 25,
    //             isLovely: function() {
    //                 return true;
    //             },
    //             job: {
    //                 clients: ["David"],
    //                 employed: true,
    //                 getSalary: function() {
    //                     return "2p";
    //                 },
    //                 getSatisfaction: function() {
    //                     return 0;
    //                 }
    //             }
    //         })
    //     })
    // });

    describe("equality", function() {

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

});
