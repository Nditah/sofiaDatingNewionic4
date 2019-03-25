export class Counter {
    chat_new = 0;
    chat_unread = 0;
    request_total = 0;
    request_new = 0;
    request_unread = 0;
    match_new = 0;
    match_unread = 0;
    like_new = 0;
    like_unread = 0;
    total_unread_count=0;
    unread_message = 0;

    constructor(counter: any) {
        Object.keys(counter).forEach((key) => {
            this[key] = counter[key];
        });
    }
}
