import { rest } from "msw";
import { players } from "dummyData/players";

export const handlers = [
  rest.post('http://localhost:3000/user/signup', async (req, res, ctx) => {
    const { name, nickname, email } = req.body

    return res(
      ctx.json({
        name,
        nickname,
        email
      })
    )
  }),
  rest.post('http://localhost:3000/players/:playerId/comment', async (req, res, ctx) => {
    const { playerId } = req.params
    const { userId, text } = req.body
    const player = players.filter(player => player.backNumber === Number(playerId))

    return res(
      ctx.status(200).json({
        id: 123123, 
        profileImg: null, 
        userId, 
        text
      })
    )
  }),
  rest.get('http://localhost:3000/players/:playerId', async (req, res, ctx) => {
    const { playerId } = req.params
    const player = players.filter(player => player.backNumber === Number(playerId))

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
];
