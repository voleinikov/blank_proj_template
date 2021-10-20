module Api
  module V1
    class BaseController < ApplicationController
      def ping
        render json: { msg: ["I'm working!"] }, status: :ok
      end
    end
  end
end