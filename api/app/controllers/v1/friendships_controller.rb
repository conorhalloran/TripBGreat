class FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.all
    render json: @friendships
  end

  def show
    render json: @friendship
  end

  def create
    friendship = Friendship.new(friendship_params)

    if friendship.save
      render json: friendship, status: :created, location: friendship
    else
      render json: friendship.errors, status: :unprocessable_entity
    end
  end

  def create
    friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if friendship.save
      flash[:notice] = "Added friend."
      redirect_to root_url
    else
      flash[:notice] = "Unable to add friend."
      redirect_to root_url
    end
  end

  def update
    if @friendship.update(friendship_params)
      render json: @friendship
    else
      render json: @friendship.errors, status: :unprocessable_entity
    end
  end

  def destroy
    friendship = current_user.friendships.find(params[:id])
    friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to current_user
  end

  private

    def friendship_params
      params.require(:friendship).permit(:user_id, :friend_id)
    end
end
