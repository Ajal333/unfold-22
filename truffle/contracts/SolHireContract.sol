// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SolHire {
    struct employer {
        address employerId;
    }

    struct Job {
        uint64 jobId;
        address employerId;
        uint postedAt;
        string title;
        string description;
        string jobType;
        uint64 budget;
        address assignee;
        uint64[] pitchIds;
    }

    struct Pitch {
        uint pitchId;
        uint jobId;
        address userId;
        string email;
        string description;
        uint price;
    }

    struct User {
        address userId;
    }

    Pitch[] pitches;
    Job[] jobs;
    uint64 jobId = 0;
    uint64 pitchId = 0;
    mapping(address => uint64) employerToJob;
    mapping(address => uint64[]) appliedJobs;
    mapping(uint64 => address) jobAssignedToUser;
    mapping(uint => uint) pitchToJob;

    function postJob(string memory title, string memory description, string memory jobType, uint64 budget) public {
        Job storage job = jobs[jobId++];
        job.employerId = msg.sender;
        job.postedAt = block.timestamp;
        job.title = title;
        job.description = description;
        job.jobType = jobType;
        job.budget = budget;

        employerToJob[msg.sender] = jobId-1;
    }

    function pitchJob(
        uint _jobId,
        string memory email,
        string memory description,
        uint price
        ) 
        public {
        Pitch storage _pitch = pitches[pitchId++];
        _pitch.jobId = _jobId;
        _pitch.userId = msg.sender;
        _pitch.email = email;
        _pitch.description = description;
        _pitch.price = price;
        
        jobs[_jobId].pitchIds.push(pitchId++);
        appliedJobs[msg.sender].push(uint64(_jobId));
    }

    function approveJob(uint64 _jobId, address _assignee) public {
        require(jobs[_jobId].employerId == msg.sender);
        jobs[_jobId].assignee = _assignee;
    }

    function getPitches (uint _jobId) public returns(Pitch memory) {
        for(int i =0; i< jobs[_jobId].pitchIds.lenght; i++){
            return pitches[i];
        }
    }



}