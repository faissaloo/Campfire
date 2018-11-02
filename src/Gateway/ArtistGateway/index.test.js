import nock from "nock";
import Artist from "../../Domain/Artist";
import ArtistGateway from ".";

describe("ArtistGateway", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe("Gets an artist", () => {
    let artistRequest;
    it("Example 1", async () => {
      let wikidata = {
        query: {
          pages: [
            {
              revisions: [
                {content: "genre=Digital hardcore, Industrial\n|"}
              ]
            }
          ]
        }
      };


      let artistRequest = nock("https://en.wikipedia.org")
        .get("/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&formatversion=2&titles=Atari%20Teenage%20Riot")
        .reply(200, wikidata);

      let artistGateway = new ArtistGateway();
      let result = await artistGateway.getArtist("Atari Teenage Riot");
      expect(artistRequest.isDone()).toBeTruthy();
      expect(result.wikipage).toEqual(wikidata);
      expect(result.name).toEqual("Atari Teenage Riot");
    });

    it("Example 2", async () => {

      let wikidata = {
        query: {
          pages: [
            {
              revisions: [
                {content: "genre=Electropunk\n|"}
              ]
            }
          ]
        }
      };

      let artistRequest = nock("https://en.wikipedia.org")
        .get("/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&formatversion=2&titles=Mindless%20Self%20Indulgence")
        .reply(200, wikidata);

      let artistGateway = new ArtistGateway();
      let result = await artistGateway.getArtist("Mindless Self Indulgence");
      expect(artistRequest.isDone()).toBeTruthy();
      expect(result.wikipage).toEqual(wikidata);
      expect(result.name).toEqual("Mindless Self Indulgence");
    });
  });
});
