class Channel{
  subscribed({params: { roomId }}){
    this.streamFrom(`chat${roomId}`);
  }
}