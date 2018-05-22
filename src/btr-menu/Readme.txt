/* CSS */=========================================
Add btr-menu.css file in <head> tag
--------------------------------------------------
<link href="/dist/css/btr-menu.css" rel="stylesheet" />


/* JS */==========================================
Add btr-menu.js before close </boby> tag
--------------------------------------------------
<script src="/Theme/js/btr-menu.js"></script>
<script>
    $(document).ready(function () {
        $("#navbar").btrmenu();
    });
</script>


/* CUSTOM */==========================================
--------------------------------------------------
desktopsubmenuicon: true,
mobileiconpack: "glyphicon",
mobileopenicon: "glyphicon-chevron-down",
mobilecloseicon: "glyphicon-chevron-up",

Example:
$("#navbar").btrmenu({
   desktopsubmenuicon: true,
   mobileiconpack: "glyphicon",
   mobileopenicon: "glyphicon-chevron-down",
   mobilecloseicon: "glyphicon-chevron-up",
});


==========================================
Example:
	<nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Candy Web1</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
            <li>
                <a href="/"> Trang chủ </a>
            </li>
            <li>
                <a href="/tin-tuc"> Tin tức </a>
                    <ul>
                            <li>
....