import React from 'react'






const user = {
    profilePicture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Software Engineer',
    profileInfo: 'Details about the user\'s profile go here.',
    settings: 'User settings and preferences can be managed here.',
    activity: 'User\'s recent activity and logs can be viewed here.'
  };



const Dashboard = () => {
  return (
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="https://via.placeholder.com/150" alt="User Profile Picture" class="rounded-circle img-thumbnail mb-3" />
                        <h4 class="card-title">{user.name}</h4>
                        <p class="card-text">{user.email}</p>
                        <p class="card-text">{user.jobTitle}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="activity-tab" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activity</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h5 class="card-title">Profile Information</h5>
                                <p class="card-text">Details about the user's profile go here.</p>
                            </div>
                            <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <h5 class="card-title">Settings</h5>
                                <p class="card-text">User settings and preferences can be managed here.</p>
                            </div>
                            <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                <h5 class="card-title">Activity</h5>
                                <p class="card-text">User's recent activity and logs can be viewed here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;
