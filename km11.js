var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>
          &quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
      </b:loop></b:if>];
var relatedPostConfig = {
      homePage: &quot;<data:blog.homepageUrl/>&quot;,
      widgetTitle: &quot;&lt;h4&gt;Related Posts:&lt;/h4&gt;&quot;,
      numPosts: 5,
      summaryLength: 150,
      titleLength: &quot;auto&quot;,
      thumbnailSize: 80,
      noImage: &quot;http://1.bp.blogspot.com/-Xakmg4CGXnA/Uw_8uqsGlwI/AAAAAAAALjg/AdRZNmOJpIA/s1600/no-img.png&quot;,
      containerId: &quot;bpostrelated-post&quot;,
      newTabLink: false,
      moreText: &quot;Read More&quot;,
      widgetStyle: 2,
      callBack: function() {}
};
