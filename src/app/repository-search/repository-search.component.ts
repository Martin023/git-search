import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository'
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})
export class RepositorySearchComponent implements OnInit {
  searchResult!: Repository
  repositories:Repository[] = [];

  githubsearch!: FetchDataService;
  searchText: any;
  constructor(githubsearch: FetchDataService) { 
    this.githubsearch = githubsearch;
  }

  ngOnInit(): void {
    this.githubsearch.getRepositories().then((repositories) => {
      this.repositories = repositories
    })
    .catch((error) => {
      console.error(error);
    });
}
searchRepositories(): void {
  console.log(this.searchText);
  this.githubsearch
    .searchRepositories(this.searchText)
    .then((searchResult) => {
      console.log(searchResult);
      this.repositories = searchResult
         
})
}

}
  


