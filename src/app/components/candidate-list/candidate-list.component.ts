import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.fetchCandidates();
  }

  fetchCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (data: any[]) => {
        this.candidates = data;
        console.log("this.candidates === ", this.candidates);
      },
      (error) => {
        console.error('Error fetching candidates:', error);
      }
    );
  }

  vote(index: number) {

    const candidate = this.candidates[index];
    console.log("candidate === ", candidate.voteCount);

    this.candidateService.updateCandidate(candidate._id).subscribe(
      (response) => {

        alert(response.message);
        // console.log('Vote count updated successfully:', response);
        this.fetchCandidates(); // Refresh the candidate list after voting

      },
      (error) => {
        alert(error.message);
        console.error('Error updating vote count:', error);
      }
    );
  }
}