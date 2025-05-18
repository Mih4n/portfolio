<pre>
    <code class="language-cs">
        using Mih4n.About;
        using Mih4n.Viewer;

        public class AboutViewer : IViewer&lt;About&gt;
        {
            public About View()
                => new About()
                {
                    Nick = "Mih4n",
                    Name = "Mikhail",
                    Surname = "Loseu"
                }
        }
    </code>
</pre>