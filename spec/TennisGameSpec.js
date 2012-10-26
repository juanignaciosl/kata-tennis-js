describe("TennisGame", function() {
    var game;
    
    it("should say ok", function() {
        game = $TENNISKATA.tennisGame();
        expect(game.start()).toBe("ok");
    });
    
});
