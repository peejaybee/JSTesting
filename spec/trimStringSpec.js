describe("Trim String",function(){
//	var trimmer;
//	trimmer = new trimString;

	it("should trim leading spaces", function() {
    var strOut = trimString("   Jasper");
    expect(strOut).toEqual("Jasper");

  });
	it("should trim trailing spaces", function() {
    var strOut = trimString("Jasper    ");
    expect(strOut).toEqual("Jasper");

  });
	it("should trim both ends simultaneously", function() {
    var strOut = trimString("      Jasper    ");
    expect(strOut).toEqual("Jasper");

  });
	it("should not molest internal spaces", function() {
    var strOut = trimString("Jasper Birmingham");
    expect(strOut).toEqual("Jasper Birmingham");

  });

});