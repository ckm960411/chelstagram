import { rest } from "msw";
import { players } from "dummyData/players";

export const handlers = [
  rest.get('http://localhost:3000/players/:playerId', async (req, res, ctx) => {
    const { playerId } = req.params
    const player = players.filter(player => player.backNumber === Number(playerId))
    // console.log(player)
    return res(
      ctx.json({
        player
      })
    )
  }),
  rest.get('http://localhost:3000/players', async (req, res, ctx) => {
    return res(
      ctx.json({
        players
      })
    )
  }),
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "adsf134fadf1radfa",
        firstName: "KMin",
        lastName: "Choi",
      })
    );
  }),
  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()

    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `Keyword ${id} not found`
      })
    );
  }),
];
