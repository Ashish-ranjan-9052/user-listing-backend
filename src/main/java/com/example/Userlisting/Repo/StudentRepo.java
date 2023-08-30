package com.example.Userlisting.Repo;

import com.example.Userlisting.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends MongoRepository<Student,String> {
}
