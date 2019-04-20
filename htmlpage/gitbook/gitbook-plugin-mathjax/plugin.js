require(["gitbook"], function(gitbook) {
   
    gitbook.events.bind("page.change", function(e) {
        MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
        // entry-content是文章页的内容div的class
        var math = document.getElementsByClassName("entry-content")[0];
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
    });
});
