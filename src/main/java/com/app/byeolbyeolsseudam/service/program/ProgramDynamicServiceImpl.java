package com.app.byeolbyeolsseudam.service.program;
import com.app.byeolbyeolsseudam.domain.program.ProgramDTO;
import com.app.byeolbyeolsseudam.repository.program.ProgramDynamicRepository;
import com.app.byeolbyeolsseudam.repository.program.ProgramRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ProgramDynamicServiceImpl implements ProgramDynamicService {
    private final ProgramDynamicRepository programDynamicRepository;
    private final ProgramRepository programRepository;

    @Override
    public Page<ProgramDTO> programDynamicList(String keyword, String programStatus, Pageable pageable) {
        return programDynamicRepository.programDynamicList(keyword, programStatus, pageable);
    }

    @Override
    public ProgramDTO findProgramDetail(Long programId) {
        ProgramDTO programDTO = programRepository.findProgramDetail(programId);
        return programDTO;
    }
}
