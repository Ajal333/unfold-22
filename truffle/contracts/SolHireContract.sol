// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SolHire {
    struct User {
        address id;
        string email;
        string bio;
        uint64 experience;
        uint64 ratingId;
    }

    struct Employer {
        address id;
        string email;
        uint64 ratingId;
    }

    struct rating {
        string comment;
        uint64 rating;
    }


    struct Job {
        uint64 id;
        uint64 employerId;
        uint256 updated_at;
        uint256 created_at;
        uint256 favourites;
        string title;
        string jobType;
        string description;
        uint64 budget;
    }

    struct Pitch {
        uint64 id;
        uint64 jobId;
        uint64 userId;
        uint64 estimatedCost;
        string email;
        string description;
    }

    
    Job[] jobs;
    uint64 jobsId = 0; 
    Pitch[] pitches;


    function postJob( uint64 id, uint64 employerId, uint256 updated_at, uint256 created_at, uint256 favourites, string memory title, string memory jobType, string memory description, uint64 budget) public returns (uint64 ) {
        Job storage job = jobs[jobsId++];
        job.budget = budget;
        job.created_at = block.timestamp;



    }




}