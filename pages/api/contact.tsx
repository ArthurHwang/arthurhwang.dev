// @ts-ignore
export default function handle(req, res) {
  console.log(req.body);
  res.status(200).end("SUCCESS");
}
