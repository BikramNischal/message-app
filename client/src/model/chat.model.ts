export default interface IChat{
    id: number;
    name: string;
    lastMessage: string;
    profilePic: string;
    date: Date;
    unReadCount: number;
}

export interface IChatProp{
    chat: IChat;
}

export interface IChatListProp{
    chats: IChat[];
    chatName: string;
    chatListHeight:number;
}