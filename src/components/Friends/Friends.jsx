import Friend from "../Friend/Friend";
import data from "../../../public/data.json"

const Friends = () => {

    const friendsData = data;

    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">
            <div>
                <h2 className="font-semibold text-2xl mb-4">Your Friends</h2>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        friendsData.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Friends;