package com.app.byeolbyeolsseudam.service.program;

import com.app.byeolbyeolsseudam.domain.Search;
import com.app.byeolbyeolsseudam.domain.myprogram.MyprogramDTO;
import com.app.byeolbyeolsseudam.domain.program.ProgramDTO;
import com.app.byeolbyeolsseudam.entity.member.Member;
import com.app.byeolbyeolsseudam.entity.myprogram.Myprogram;
import com.app.byeolbyeolsseudam.repository.member.MemberRepository;
import com.app.byeolbyeolsseudam.repository.myprogram.MyprogramRepository;
import com.app.byeolbyeolsseudam.repository.program.ProgramRepository;
import com.app.byeolbyeolsseudam.type.MyprogramStatus;
import com.app.byeolbyeolsseudam.type.ProgramStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProgramSearchService implements ProgramService {
    private final ProgramRepository programRepository;
    private final MyprogramRepository myprogramRepository;
    private final MemberRepository memberRepository;

    /* 프로그램 _ Keyword 로 검색 List*/
    @Override
    public List<ProgramDTO> searchProgram(String keyword){
        return programRepository.searchProgram(keyword);
    }

    /* 전체 program List */
    @Override
    public List<ProgramDTO> programAllList() {
        return programRepository.programAllList();
    }

    /* program List _ STATUS List*/
    @Override
    public List<ProgramDTO> programStatusIngList(ProgramStatus programStatus) {
        return programRepository.programStatusIngList(programStatus);
    }

    /* 프로그램 Article 클릭시 해당 Detail 페이지로 이동 */
    @Override
    public ProgramDTO findProgramDetail(Long programId) {
        ProgramDTO programDTO = programRepository.findProgramDetail(programId);
        return programDTO;
    }

//    /* 무한 스크롤 - 동적 쿼리 */
//    @Override
//    public Page<ProgramDTO> selectScrollPrograms(Search search, Pageable pageable) {
//        return programRepository.selectScrollPrograms(search, pageable);
//    }


//    @Override
//    public Page<ProgramDTO> selectScrollPrograms(Search search, Pageable pageable) {
//        return programRepository.selectScrollPrograms(search, pageable);
//    }


    @Override
    public ProgramDTO programDetailPage(Model model, Member member, Long programId) {
        return programRepository.programDetailPage(model, member, programId);
    }

    @Override
    public ProgramDTO programDetailPage1(Long programId) {
        return programRepository.programDetailPage1(programId);
    }


    /* 프로그램에 멤버 신청 */
    @Override
    public void programMemberSave(Long programId, Long memberId) {
        MyprogramDTO myprogramDTO = new MyprogramDTO();
        myprogramDTO.setMyprogramStatus(MyprogramStatus.신청완료);
        myprogramDTO.setProgramId(programId);
        myprogramDTO.setMemberId(memberId);

        Myprogram myprogram = myprogramDTO.toEntity();
        myprogram.changeProgram(programRepository.findById(programId).get());
        myprogram.changeMember(memberRepository.findById(memberId).get());

        myprogramRepository.save(myprogram);
    }


}
