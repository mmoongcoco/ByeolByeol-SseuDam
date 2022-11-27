package com.app.byeolbyeolsseudam.entity;

import com.app.byeolbyeolsseudam.embaddable.PossibleDate;
import com.app.byeolbyeolsseudam.type.ProgramStatus;
import com.sun.istack.NotNull;
import lombok.*;
import net.bytebuddy.asm.Advice;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_PROGRAM")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Program extends Period {
    @Id @GeneratedValue @NotNull
    private Long programId;
    @NotNull
    private String programName;
    @NotNull
    private String programPlace;
    @Embedded @NotNull
    private PossibleDate possibleDate;
    @NotNull
    private int programTime;
    @NotNull
    private LocalDateTime programDate;
    @NotNull
    private String programDetail;
    @NotNull
    private int programLimitCount;
    @NotNull
    @Enumerated(EnumType.STRING)
    private ProgramStatus programStatus;
    @NotNull
    private String programFile;

    @Builder
    public Program(String programName, String programPlace, LocalDateTime openingDate, LocalDateTime closingDate, int programTime, LocalDateTime programDate, String programDetail, int programLimitCount, ProgramStatus programStatus, String programFile) {
        this.programName = programName;
        this.programPlace = programPlace;
        this.possibleDate.setOpeningDate(openingDate);
        this.possibleDate.setClosingDate(openingDate);
        this.programTime = programTime;
        this.programDate = programDate;
        this.programDetail = programDetail;
        this.programLimitCount = programLimitCount;
        this.programStatus = programStatus;
        this.programFile = programFile;
    }

    public void update(String programName, String programPlace, PossibleDate possibleDate, int programTime, LocalDateTime programDate, String programDetail, int programLimitCount, ProgramStatus programStatus, String programFile){
        this.programName = programName;
        this.programPlace = programPlace;
        this.possibleDate = possibleDate;
        this.programTime = programTime;
        this.programDate = programDate;
        this.programDetail = programDetail;
        this.programLimitCount = programLimitCount;
        this.programStatus = programStatus;
        this.programFile = programFile;
    }
}
