import { rest } from "msw";
import { players } from "dummyData/players";
import { users } from "dummyData/user"

export const handlers = [
  // 로그인
  rest.post('http://localhost:3000/user/login', async (req, res, ctx) => {
    const { email, password } = req.body

    const finded = users.find(v => v.email === email)
    if (!finded) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "해당 이메일을 찾을 수가 없습니다.",
        })
      )
    }
    if (finded.password !== password) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "비밀번호가 일치하지 않습니다.",
        }),
      )
    }
    return res(
      ctx.json({
        id: finded.id,
        email: finded.email,
        name: finded.name,
        nickname: finded.nickname,
      })
    )
  }),
  // 회원가입
  rest.post('http://localhost:3000/user/signup', async (req, res, ctx) => {
    const { name, nickname, email } = req.body

    const findedEmail = users.find(v => v.email === email)
    if (findedEmail) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "중복된 계정입니다."
        })
      )
    }
    const findedNickname = users.find(v => v.nickname === nickname)
    if (findedNickname) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "중복된 계정입니다."
        })
      )
    }
    return res(
      ctx.json({
        name,
        nickname,
        email
      })
    )
  }),
  // 댓글 달기
  rest.post('http://localhost:3000/players/:playerId/comment', async (req, res, ctx) => {
    const { playerId } = req.params
    const { userId, userName, commentId, text, date } = req.body
    const player = players.find(player => player.backNumber === Number(playerId))

    return res(
      ctx.json({
        id: commentId,
        userId: userId,
        userName: userName,
        profileImg: null, 
        text: text,
        date: date,
      })
    )
  }),
  // 댓글 수정
  rest.patch('http://localhost:3000/players/:playerId/comment', async (req, res, ctx) => {
    const { playerId } = req.params
    const { text, id } = req.body
    const player = players.find(player => player.backNumber === Number(playerId))
    const { comments } = player
    const finded = comments.find(comment => comment.id === id)

    return res(
      ctx.json({
        ...finded,
        text,
      })
    )
  }),
  // 선수정보 불러오기
  rest.get('http://localhost:3000/players/:playerId', async (req, res, ctx) => {
    const { playerId } = req.params
    const player = players.filter(player => player.backNumber === Number(playerId))

    return res(
      ctx.json({
        player
      })
    )
  }),
  // 선수단 전체 정보 불러오기
  rest.get('http://localhost:3000/players', async (req, res, ctx) => {
    return res(
      ctx.json({
        players
      })
    )
  }),
];
