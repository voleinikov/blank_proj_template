module Api
  module V1
    class BaseController < ApplicationController
      def ping
        render json: { msg: ['It works!'] }, status: :ok
      end
    end
  end
end