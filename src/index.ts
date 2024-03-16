import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
  onConnect(session, callback) {
    console.log("onConnect");
    callback();
  },
  onClose(session, callback) {
    console.log("onClose");
    callback();
  },
  onAuth(auth, session, callback) {
    console.log("onAuth");
    callback(null);
  },
  onMailFrom(address, session, callback) {
    console.log("onMailFrom");
    callback();
  },
  onRcptTo(address, session, callback) {
    console.log("onRcptTo");
    callback();
  },
  onData(stream, session, callback) {
    console.log("onData");
    stream.pipe(process.stdout);
    stream.on("end", callback);
  },
});

server.listen(25, () => {
  console.log("SMTP server started on port 25");
});
