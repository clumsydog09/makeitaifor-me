export type Message = {
    id: string;
    content: string[] | null;
    whoSent: string; // user name or "bot"
    whenSent: Date; // timestamp
}

export type Chat = {
    id: string;
    title: string;
    content: Message[] | null; // array of strings of markdown with math and images, where each \ is escaped. 
}