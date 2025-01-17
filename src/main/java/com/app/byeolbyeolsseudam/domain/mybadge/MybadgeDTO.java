package com.app.byeolbyeolsseudam.domain.mybadge;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
@NoArgsConstructor
public class MybadgeDTO {
    private Long mybadgeId;
    private Long memberId;
    private Long badgeId;
    private Long badgeName;
    private LocalDateTime createdDate;

    @QueryProjection
    public MybadgeDTO(Long mybadgeId, Long memberId, Long badgeId, LocalDateTime createdDate) {
        this.mybadgeId = mybadgeId;
        this.memberId = memberId;
        this.badgeId = badgeId;
        this.createdDate = createdDate;
    }

}
