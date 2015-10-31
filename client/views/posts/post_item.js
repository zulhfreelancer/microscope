Template.postItem.helpers({
	// extract domain.com from the URL
	// URL example: domain.com/post/1234
	// result: domain.com
	// we pass this `domain` into `post_item` template inside {{domain}} expression
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});

// Where does it take that url from in the first place?

// Go back to our `posts_list.html` template.
// The `{{#each}}` block helper not only iterates over our array,
// it also sets the value of `this` inside the block to the iterated object.

// This means that between both `{{#each}}` tags, each post is assigned to `this`
// successively, and that extends all the way inside the included template's
// manager (post_item.js).

// posts_list.html -> posts_list.js -> post_item.js