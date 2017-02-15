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
              'test'\
          '</body>'\
      '</html>'.html_safe
  end

end

