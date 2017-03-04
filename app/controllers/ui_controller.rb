class UiController < ApplicationController

  def index
    render html:

      '<!DOCTYPE html>'\
      '<html lang="en">'\
          '<head>'\
              '<meta charset="utf-8" />'\
              '<meta name="viewport" content="width=device-width" />'\
              '<title>test</title>'\
          '</head>'\
          '<body>'\
              '<div id="root"> </div>'\
              '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">'\
              '<script type="text/javascript" src="bundle.js"></script>'\
          '</body>'\
      '</html>'.html_safe
  end

end
