package com.example.Userlisting.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="students")
public class Student {

    @Id
    private String _id;
    private String firstname;
    private String lastname;
    private String address;
    private String mobile;

    private int a;


    public Student(String _id, String firstname, String lastname,String address, String mobile) {
        this._id = _id;
        this.firstname = firstname;
        this.lastname=lastname;
        this.address = address;
        this.mobile = mobile;
    }
//    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


    public Student() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }



    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "_id='" + _id + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname'" + lastname + '\'' +
                ", address='" + address + '\'' +
                ", mobile='" + mobile + '\'' +
                '}';
    }
}