(function() {var implementors = {};
implementors["serde_json"] = [{text:"impl&lt;'a, W, F&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"serde_json/ser/struct.Serializer.html\" title=\"struct serde_json::ser::Serializer\">Serializer</a>&lt;W, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"serde_json/ser/trait.Formatter.html\" title=\"trait serde_json::ser::Formatter\">Formatter</a>,&nbsp;</span>",synthetic:false,types:["serde_json::ser::Serializer"]},];
implementors["serde_urlencoded"] = [{text:"impl&lt;'output, Target&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"serde_urlencoded/ser/struct.Serializer.html\" title=\"struct serde_urlencoded::ser::Serializer\">Serializer</a>&lt;'output, Target&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: 'output + <a class=\"trait\" href=\"url/form_urlencoded/trait.Target.html\" title=\"trait url::form_urlencoded::Target\">UrlEncodedTarget</a>,&nbsp;</span>",synthetic:false,types:["serde_urlencoded::ser::Serializer"]},];
implementors["toml"] = [{text:"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'b mut <a class=\"struct\" href=\"toml/ser/struct.Serializer.html\" title=\"struct toml::ser::Serializer\">Serializer</a>&lt;'a&gt;",synthetic:false,types:["toml::ser::Serializer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
