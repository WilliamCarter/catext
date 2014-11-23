define(["jext"], function() {

	describe("testing", function() {

		it("should test with jasmine", function() {
			expect("this").not.toBe("that");
		})

		it("should return Catriona", function() {
			var array = new Array();
			expect(array.returnCat()).toBe("Catriona")
		});
	});

});
