

export const fetchSubreddit = async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map(child => {
        return {
            id              : child.data.id,
            title           : child.data.title,
            no_upvotes      : child.data.ups,
            no_comments     : child.data.num_comments,
            date_posted     : child.data.created_utc * 1000,
            author          : child.data.author,
            link            : child.data.permalink,
            image           : child.data.preview ? child.data.preview.images[0].source.url.replaceAll('&amp;','&') : undefined
        }
    }).filter(post => post.image !== undefined);
}