package com.app.byeolbyeolsseudam.service.jubgging;

import com.app.byeolbyeolsseudam.domain.badge.BadgeDTO;
import com.app.byeolbyeolsseudam.domain.course.CourseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JubggingService {
    public List<BadgeDTO> getBadgeList();
    public List<CourseDTO> getCourseList();
    public CourseDTO showCourse(int courseNumber);
    public CourseDTO showSpecialCourse();
}
